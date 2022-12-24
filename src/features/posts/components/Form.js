import { useState } from 'react'
import PropTypes from 'prop-types'
import Button from 'react-bootstrap/Button';

const Form = ({
  onSave,
  requestResponse,
  formDefaults,
  headingTitle,
  buttonText,
}) => {
  const [formFields, setFormFields] = useState(formDefaults)
  const { isLoading } = requestResponse
  const updateField = value => {
    setFormFields({
      ...formFields,
      ...value,
    })
  }

  const submitDisabled = !formFields.title || !formFields.body || isLoading

  return (
    <div>
      <h1>{headingTitle}</h1>
      <div className='mb-3'>
        <label htmlFor='post-title' className='form-label'>Title</label>
        <input
          id='post-title'
          type='text'
          name='title'
          value={formFields.title}
          className='form-control'
          onChange={e => updateField({ title: e.target.value })}
          required
        />
      </div>
      <div className='mb-3'>
        <label htmlFor='post-body'>Body</label>
        <textarea
          id='post-body'
          type='textarea'
          name='body'
          value={formFields.body}
          className='form-control'
          onChange={e => updateField({ body: e.target.value })}
          required
        />
      </div>
      <div className=''>
        <Button
          type='submit'
          disabled={submitDisabled}
          onClick={e => onSave({ ...formFields })}
          variant='success'
        >
          {buttonText}
        </Button>
      </div>
    </div>
  )
}

Form.propTypes = {
  onSave: PropTypes.func.isRequired,
  requestResponse: PropTypes.object,
  formDefaults: PropTypes.object.isRequired,
  headingTitle: PropTypes.string.isRequired,
  buttonText: PropTypes.string.isRequired,
}

export default Form
