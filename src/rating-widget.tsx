import React, { useEffect, useState } from 'react'
import { Rating, Stack, Typography } from '@mui/material'

export const RATING_KEY = 'app_rating_score'

const FEEDBACK_FORM_LINK = 'https://docs.google.com/forms/d/e/___YOUR_DOC___/viewform'
const GOOD_REVIEW_LINK = 'https://chromewebstore.google.com/detail/___YOUR_EXT___/reviews'

function RatingWidget() {
  const [value, setValue] = useState<number | null>(0)

  useEffect(() => {
    const rate = localStorage.getItem(RATING_KEY);
    if (rate) {
      setValue(+rate)
    }
  }, [])

  // @ts-ignore
  const handleClick = (e, value) => {
    setValue(value)

    if (value > 3) {
      window.open(GOOD_REVIEW_LINK, '_blank', 'noreferrer')
    } else {
      window.open(FEEDBACK_FORM_LINK, '_blank', 'noreferrer')
    }

    localStorage.setItem(RATING_KEY, value)
  }

  return (<>
    <Stack direction={'row'} className="rating-widget" justifyContent={'center'} alignItems={'center'}
      paddingTop={'3px'}>
      <Typography variant={'body2'} sx={{ marginRight: '5px' }}>Rate us</Typography>
      <Rating
        name="size-small"
        value={value}
        size="large"
        sx={{ marginRight: '10px' }}
        onChange={handleClick}
      />
    </Stack>
  </>)
}

export default RatingWidget
