import React, { Component } from 'react';
import './GetOnlinePosts.css'
// import GetDates from './GetDates';

// var URL_REPORT = "http://127.0.0.1:8000/rest/v1/report/?format=json&from_date=2019-07-22&to_date=2019-07-31";

class GetOnlinePosts extends Component {

    constructor(props){
        super(props);
        // this.URL_REPORT = "http://127.0.0.1:8000/rest/v1/report/?format=json";
        this.url = this.props.url;
        this.state = {
            error : null,
            isLoaded : false,
            posts : []
        };

        // alert(this.url);
    }

    
    componentDidMount(){
        // console.log("data recieved form GetDates::::", this.props.url)
        fetch(this.url)
        .then( response => response.json())
        .then(
            // handle the result
            (result) => {
                this.setState({
                    isLoaded : true,
                    posts : result
                });
            },
            // Handle error 
            (error) => {
                this.setState({
                    isLoaded: true,
                    error
                })
            },
        )
    }

    render() {
        // alert(this.url);
        const {error, isLoaded, posts} = this.state;
        if(error){
            return <div>Error in loading</div>
        }else if (!isLoaded) {
            return <div>Loading ...</div>
        }else{
            return(
                <div class="container">
                    <table class="table">
                        <tr>
                            <th>emp_id</th>
                            <th>cart_id</th>
                            <th>snack_id</th>
                            <th>qty</th>
                            <th>data_time</th>
                            <th>total</th>
                            <th>payment_status</th>
                        </tr>
                    {   
                        posts.map(post => (
                            <tr key={post.id} align="start">
                                <td className="emp_id">{post.emp_id}</td>
                                <td className="cart_id">{post.cart_id}</td>
                                <td className="snack_id">{post.snack_id}</td>
                                <td className="qty">{post.qty}</td>
                                <td className="date_time">{post.date_time}</td>
                                <td className="total">{post.total}</td>
                                <td className="payment_stauts">{post.payment_status}</td>
                            </tr>
                        ))
                    }
                    </table>
                </div>
            );
        } 
    }
}
  
export default GetOnlinePosts;