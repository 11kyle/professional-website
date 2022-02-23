import { MDBRow } from 'mdb-react-ui-kit';
import BlogPost from './BlogPost';

function Blog() {
    return (
        <section style={{ height: "100vh" }} id="blog">
            <MDBRow>
                <h1 className='display-6' style={{ marginTop: "75px"}}>Blog</h1>
                <BlogPost />
            </MDBRow>
        </section>
        
    );
}

export default Blog;