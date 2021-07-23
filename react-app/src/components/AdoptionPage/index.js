import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCats } from '../../store/cats';

export default function AdoptionPage({newly_adopted_cats}) {
  const dispatch = useDispatch();

  const user = useSelector((state) => state.session.user);
  const cats = useSelector((state) => Object.values(state.cats));
  const your_cats =
    cats
      .filter((cat) =>
        (cat.owner_id === user.id && cat.adopted === true)
        )
      // .map((cat) =>
      //   cat.id
      //   )

  useEffect(() => {
    dispatch(getCats())
  },[dispatch])

  return (
    <>
    <h1>Your Cat Collection</h1>
      {your_cats.map((cat) => cat)}
    </>
  )
}
