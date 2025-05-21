
import Btn from './Btns';
import '../TagButton.css';


export default function TagButton(){


    const categories =[
        {
            uniqueId :1,
            title : "new",
            description : "new 123",
            child : (
                    <div>👍</div>
            )
        },
        {
            uniqueId :2,
            title : "more views",
            description : "new 123",
            child : (
                    <div>
                        <img style={{width : "100px"}} src="https://images.pexels.com/photos/2220336/pexels-photo-2220336.jpeg?cs=srgb&dl=pexels-alexasfotos-2220336.jpg&fm=jpg" />
                    </div>
            )
        },
        {
            uniqueId :3,
            title : "article",
            description : "new article",
            child : (
                    <div>
                        <span>🏆🏆🏆</span>
                    <div> <img style={{width : "100px"}} src='https://img.freepik.com/free-vector/modern-golden-star-background-glamourous-designs_1017-56399.jpg?semt=ais_hybrid&w=740'/> </div>
                    </div>
            )
        },
        {
            uniqueId :4,
            title : "soon",
            description : "soon 123",
            child : (
                    <div>🎈🎈🎈</div>
            )
        },
    ];

    const showCategories=categories.map((cat) => {
        return <Btn key={cat.uniqueId} title={cat.title} description={cat.description}>
            {cat.child}
        </Btn>
    })




    return(
        <div>

            <div className="content-tag-button">

                {showCategories}

                {/* <Btn title="جديد"> 

                    <div>👍</div>

                </Btn>

                <Btn title="الاكثر مشاهدة"> 
                    <div>
                        <img style={{width : "100px"}} src="https://images.pexels.com/photos/2220336/pexels-photo-2220336.jpeg?cs=srgb&dl=pexels-alexasfotos-2220336.jpg&fm=jpg" />
                    </div>
                </Btn>

                <Btn title="مقالات مميزة">
                    <span>🏆🏆🏆</span>
                    <div> <img style={{width : "100px"}} src='https://img.freepik.com/free-vector/modern-golden-star-background-glamourous-designs_1017-56399.jpg?semt=ais_hybrid&w=740'/> </div>
                </Btn> */}

             
            </div>

        </div>
    )
}