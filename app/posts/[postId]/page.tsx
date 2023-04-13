
const PostDetail = ({params} : {params : {postId : string}})=>{
    return (
        <div>Post Detail : {params.postId}</div>
    )
}

export default PostDetail;