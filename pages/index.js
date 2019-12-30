import {getPosts, getSinglePost} from '../api/posts';

const Index = (props) =>(<div>
                            <ul>
                                    {           
                                        props.posts.map(post=>(
                                        <li key={post.id}>{post.title}</li>
                                ))
                            }
                            </ul>
                        </div>
                        )       

Index.getInitialProps = async () => {
    const posts = await getPosts();
    return { posts}
    }

export default Index; 