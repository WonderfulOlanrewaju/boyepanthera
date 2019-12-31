import {getPosts, getSinglePost} from '../api/posts';
import {Link} from 'next/link';

const Index = (props) =>(<div>
                            <ul>
                                    {           
                                        props.posts.map(post=>(
                                        <li key={post.id}>
                                            <Link href={`/[slug]`} as={`/${post.slug}`}>
                                                <a>{post.title}</a>
                                            </Link></li>
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