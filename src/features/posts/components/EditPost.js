import { useNavigate, useParams } from 'react-router-dom'
import { useGetPostQuery, useUpdatePostMutation } from '../../../services/postSlice'
import Form from './Form'

const EditPost = () => {
  const { postId } = useParams()
  const { isLoading, isSuccess, isError, data: post } = useGetPostQuery(postId)
  const navigate = useNavigate()
  const [updatePost, requestResponse] =
    useUpdatePostMutation()

  if(isError) {
    return <>Unable to find post</>
  }

  if(isLoading) {
    return (
      <div className="d-flex align-items-center justify-content-center">
        <strong>Loading...</strong>
        <div className="spinner-border" role="status" aria-hidden="true"></div>
      </div>
    )
  }

  const onSave = async formFields => {
    formFields = {
      ...formFields,
    }

    try {
      await updatePost({
        url: `/posts/${postId}`,
        body: formFields,
      }).unwrap()
      navigate('/posts')
    } catch (e) {
      console.log('There was an error updating your announcement')
    }
  }

  if(isSuccess && post) {
    const formDefaults = {
      title: post.title,
      body: post.body,
    }

    return (
      <>
        <Form
          headingTitle={`Edit ${post.title}`}
          buttonText='Update'
          {...{
            onSave,
            requestResponse,
            formDefaults,
          }}
        />
      </>
    )
  }
}

EditPost.propTypes = {}

export default EditPost
