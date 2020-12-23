import React, { useState, useEffect, useCallback } from 'react'
import styled from 'styled-components'
import { useFormikContext } from 'formik'
import _ from 'lodash'

export const Autosave = ({ debounceMs, dirty }) => {
  const formik = useFormikContext()
  const [isSaved, setIsSaved] = useState(null)
  const debouncedSubmit = useCallback(
    _.debounce(() => {
      return formik.submitForm().then(() => setIsSaved(true))
    }, debounceMs),[])

  useEffect(() =>{
    dirty && debouncedSubmit()
    return () => dirty && debouncedSubmit()
  },
    [debouncedSubmit, dirty, formik.values]
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