import { useState } from 'react';

export default function CreatePostPage () {

    const [formData, setFormData] = useState({
        caption:null,
        img_link:null
    })

    return (
        <div className="create-post">
        <h3>Create an update!</h3>
        <form action="/posts" method="POST" encType='multipart/form-data' className="new-post-form">
            <label>
                Add a photo:
                <input onChange={(e)=>{console.log(e.target.value)}} type="file" name="image" />
            </label>
            <label>
                Caption:
                <input onChange={(e)=>{console.log(e.target.value)}} type="text" name="title" />
            </label>
            <label>
                Hashtags:
                <input placeholder='separate tags by #, no spaces.' type="text" />
            </label>
            <input type="submit" value="Post" />
        </form>
        </div>
        
    )
}