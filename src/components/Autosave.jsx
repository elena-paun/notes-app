import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { useFormikContext } from 'formik'
import _ from 'lodash'

export const Autosave = ({ debounceMs }) => {
  const formik = useFormikContext()
  const [isSaved, setIsSaved] = useState(null)
  const debouncedSubmit = _.debounce(async () => {
      await formik.submitForm()
      return setIsSaved(true)
    }, debounceMs)

  useEffect(() => debouncedSubmit, [debouncedSubmit, formik.values])

  return (
    <ChangesSaved>
      {
        !!formik.isSubmitting
          ? 'Saving...'
          : isSaved
            ? 'Your changes saved.'
            :null
      }
    </ChangesSaved>
  )
}

const ChangesSaved = styled.div`
  font-family: Century Gothic;
  font-size: 12px;
`