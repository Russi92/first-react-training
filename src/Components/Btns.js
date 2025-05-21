import '../Btns.css';


export default function Btn({title ,description, children}){
    return(
        <div className=''>
 
            {title == null || title == "" ? <div></div> : 

                <button className='btn'>
                    {title}
                    {children}
                    {description}
                </button>

            }

        </div>
    )
}

function clickBtn(){
    alert('welcome to Tarmeez Academy')
}