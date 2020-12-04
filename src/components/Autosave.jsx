import React, { useState, useEffect, useCallback } from 'react'
import styled from 'styled-components'
import { useFormikContext } from 'formik'
import _ from 'lodash'

export const Autosave = ({ debounceMs, dirty }) => {
  const formik = useFormikContext()
  const [isSaved, setIsSaved] = useState(null)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const debouncedSubmit = useCallback(
    _.debounce(() => {
      return formik.submitForm().then(() => setIsSaved(true))
    }, debounceMs),[])

  useEffect(() =>
    debouncedSubmit,
    [debouncedSubmit, formik.values]
  )

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