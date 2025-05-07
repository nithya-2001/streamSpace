import React from 'react'

const commentsList=[
    {
        name:"Nithya Vardhan",
        text:"Welcome to comment section",
        replies:[]
    },
    {
        name:"Nithya Vardhan",
        text:"Welcome to comment section",
        replies:[{
            name:"Nithya Vardhan",
            text:"Welcome to comment section",
            replies:[
                {
                    name:"Nithya Vardhan",
                    text:"Welcome to comment section",
                    replies:[
                        {
                            name:"Nithya Vardhan",
                            text:"Welcome to comment section",
                            replies:[
                                {
                                    name:"Nithya Vardhan",
                                    text:"Welcome to comment section",
                                    replies:[]
                                },
                            ]
                        },
                    ]
                },
            ]
        },{
            name:"Nithya Vardhan",
            text:"Welcome to comment section",
            replies:[]
        },]
    },
    {
        name:"Nithya Vardhan",
        text:"Welcome to comment section",
        replies:[
            {
                name:"Nithya Vardhan",
                text:"Welcome to comment section",
                replies:[]
            },
            {
                name:"Nithya Vardhan",
                text:"Welcome to comment section",
                replies:[{
                    name:"Nithya Vardhan",
                    text:"Welcome to comment section",
                    replies:[]
                },
                {
                    name:"Nithya Vardhan",
                    text:"Welcome to comment section",
                    replies:[]
                },]
            },
            {
                name:"Nithya Vardhan",
                text:"Welcome to comment section",
                replies:[]
            },
        ]
    },
    {
        name:"Nithya Vardhan",
        text:"Welcome to comment section",
        replies:[]
    },
    {
        name:"Nithya Vardhan",
        text:"Welcome to comment section",
        replies:[
            {
                name:"Nithya Vardhan",
                text:"Welcome to comment section",
                replies:[]
            },
            {
                name:"Nithya Vardhan",
                text:"Welcome to comment section",
                replies:[]
            },
            {
                name:"Nithya Vardhan",
                text:"Welcome to comment section",
                replies:[
                    {
                        name:"Nithya Vardhan",
                        text:"Welcome to comment section",
                        replies:[]
                    },
                ]
            },
        ]
    },
]

const Comment=({data})=>{
    const {name,text}=data;
    return (
        <div className='flex m-3 shadow-sm bg-gray-100'>
            <img className='h-10 w-10'
            alt="user"
            src="https://static.vecteezy.com/system/resources/thumbnails/002/318/271/small_2x/user-profile-icon-free-vector.jpg"/>
            <div>
            <p className='font-bold'>{name}</p>
            <p>{text}</p>
            </div>
        </div>
    )
}

const CommentData=({comments})=>{
    return (
        comments.map((comment,index)=>(
            <div key={index}>
            <Comment data={comment}/>
            <div className='pl-5 border border-l-black ml-5'>
                <CommentData comments={comment.replies}/>
            </div>
            </div>
        ))
    )
}

const CommentsContainer = () => {
  return (
    <div className='m-5'>
        <h1 className='p-2 m-2 font-bold text-2xl'>Comments:</h1>
        <p><CommentData comments={commentsList}/></p>
    </div>
  )
}

export default CommentsContainer