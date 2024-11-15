import ErrorMessage from "../errorMessage/ErrorMessage"
import {Link} from 'react-router-dom'
const Page404 = () =>{
    return (
        <div>
            <ErrorMessage/>
            <p style={{'textAlign': 'center', 'fontWeight':'bold', 'fontWeight':'bold',}}>Page doesn't exist</p>
            <Link style={{'display': 'block', 'textAlign': 'center','fontWeight':'bold','fontWeight':'bold','marginTop':'30px' }}
            to = '/'> Back to Main page
            </Link>
        </div>
    )
}
export default Page404;