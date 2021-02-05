import React, { useState, useEffect, useCallback } from 'react'
import styled from 'styled-components'
import { useFormikContext } from 'formik'
import _ from 'lodash'

export const Autosave = () => {
  const formik = useFormikContext()
  const [isSaved, setIsSaved] = useState(null)
  const [message, setMessage] = useState('')
  const debouncedSubmit = useCallback(
    _.debounce(() => {
      return formik.submitForm().then(() => {
        setIsSaved(true)
        setMessage('Your changes are saved.')
      })
    }, 1000),[])
  useEffect(() => {
    formik.dirty && debouncedSubmit()
  }, [debouncedSubmit, formik.dirty])
  console.log(formik.dirty)
  useEffect(() =>  _.debounce(() => formik.dirty === false && setMessage(''), 4000), [formik.dirty])
  return (
    <ChangesSaved>
      {
        !!formik.isSubmitting  
          ? 'Saving...'
          : isSaved
            ? message
            :null
      }
    </ChangesSaved>
  )
}

const ChangesSaved = styled.div`
  font-family: 'Sofia';
  font-size: 15px;
`