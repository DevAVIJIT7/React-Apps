import Form from './Form'
import { useCreatePostMutation } from '../../../services/postSlice'
import { useNavigate } from 'react-router-dom'

const CreatePost = () => {
  const [createPost, requestResponse] = useCreatePostMutation()
  const navigate = useNavigate()
  const formDefaults = {
    title: '',
    body: '',
  }

  const onSave = async formFields => {
    try {
      await createPost({
        url: '/posts',
        body: formFields,
      }).unwrap()

      navigate('/posts')
    } catch (e) {
      console.log('There was an error creating your post')
    }
  }

  return (
    <>
      <Form
        headingTitle='New Post'
        buttonText='Save'
        {...{
          onSave,
          requestResponse,
          formDefaults,
        }}
      />
    </>
  )
}

CreatePost.propTypes = {}

export default CreatePost
