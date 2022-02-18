import { Row } from 'react-bootstrap';
import BlogPost from './BlogPost';

function Blog() {
    return (
        <Row id="blog" style={{ height: "100vh" }}>
            <BlogPost />
        </Row>
    );
}

export default Blog;