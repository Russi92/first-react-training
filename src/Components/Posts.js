
import '../Posts.css'

export default function Posts({postName = "no name now" , postBody = "no post now" , address="no address now"}){



    return(
        <div>

            <div className="content-post">

                <div className='post-title'>{postName}</div>

                <hr></hr>

                <div className='post-body'>{postBody}</div>

                <hr></hr>

                <div style={{textAlign : "center"}}>{address}</div>

            </div>

        </div>
    )
}