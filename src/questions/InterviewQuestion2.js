import axios from "axios"
import _ from "lodash";
import {useState} from "react"
import {Container,Row, Col, Form, Button, Alert} from "react-bootstrap"

export default function Question2(){
    let [post, setPost] = useState({
        title: "",
        body: ""
    })

    let [status, setStatus] = useState(null)
    /**
     * @function validate
     * @param {string} title
     * @param {string} body
     * @returns {boolean}
     * 
     * @description validates that a post's title and body are not empty
     */
    function validate(title, body){
        return title !== "" && body !== ""
    }
    /**
     * @function isValid
     * @returns {boolean}
     * @description high performance version of validate.
     */
    let isValid = _.memoize(validate);
    
    /**
     * @function updatePost
     * @param {SyntheticEvent} $event 
     * @param {string} field 
     * @description updatePost takes the input value from an onChange event and triggers a state update on the field that is updating. This can be either the title or the body
     */
    function updatePost($event, field){
        setPost(prevPost => ({
            ...prevPost,
            [field]: $event.target.value
        }));
    }
    /**
     * @function addPost
     * @param {SyntheticEvent} $event
     * @description Triggers an endpoint to create a new post for the given user.
     */
    function addPost($event){
        $event.preventDefault();
        if(isValid(post.title, post.body)){
            axios.post(`https://jsonplaceholder.typicode.com/posts`, {post, userId: 1}).then(response=>{
                setStatus(response.status);    
            }).finally(()=>{
                setPost({
                    title: '',
                    body: ''
                })

                setTimeout(()=> setStatus(null), 2500)

            })
        }
    }
    
    return (
        <>
        <Alert show={status !== null} variant={status < 300 ? 'success' : 'danger'} dismissible>
            {status < 300 && status? 'Post created!' : 'Hmm, that message didn\'t post.'}
        </Alert>
        <Container size="sm">
        <Row>
            <Col><h1>Question 2</h1></Col>
        </Row>
        <Row>
            <Col>
                <p>One of the requirements of our application is that users should be able to create posts. A post is made up of a title and a body. Please use the <a href="https://jsonplaceholder.typicode.com/posts" target="_blank">provided API</a> to post a message. </p>
                <ol className="w-50" style={{margin: "auto"}}>
                    <li>If given an error status, what message would you show the user and how?</li>
                    <li>How can we prevent invalid requests from being fired?</li>
                </ol>
            </Col>
        </Row>
        <Row>
            <Col>
                <Form>
                    <Form.Label className="mt-3 mb-3">
                        Title
                    </Form.Label>
                    <Form.Control type="text" value={post.title} onChange={($event)=> updatePost($event, 'title')} />
                    <Form.Label className="mb-3">
                        Body
                    </Form.Label>
                    <Form.Control as="textarea" value={post.body} onChange={($event) => updatePost($event, 'body')} />
                    <Button className="mt-3" variant="primary" type="submit" onClick={addPost}>
                        Post
                    </Button>
                </Form>
            </Col>
        </Row>
        </Container>
        </>
    );
};