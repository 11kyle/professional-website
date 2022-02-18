import { Row } from 'react-bootstrap';
import BlogPost from './BlogPost';

function Blog() {
    return (
        <section style={{ height: "100vh" }} id="blog">
            <Row>
                <h1 className='display-6' style={{ marginTop: "100px"}}>Blog</h1>
                <BlogPost />
            </Row>
        </section>
        
    );
}

export default Blog;