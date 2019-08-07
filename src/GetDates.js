import React, { Component } from 'react';
// import GetOnlinePosts from './GetOnlinePosts';


class GetDates extends Component {

    constructor (props) {
        super(props)
        this.URL_REPORT = "http://127.0.0.1:8000/rest/v1/report/?format=json";
        this.postData = "";
        this.state = {
            error : null,
            isLoaded : false,
            from_date: '' ,
            to_date: '',
            posts : [],
            url:'http://127.0.0.1:8000/rest/v1/report/?format=json'
        }
        this.onChange = this.onChange.bind(this)
    }

    onChange(e) {
        this.setState({[e.target.name]: e.target.value});
      }


    getData = (e) => {        
        this.URL_REPORT += "&from_date=" + this.state.from_date + "&to_date=" + this.state.to_date;
        this.setState({URL_REPORT: this.URL_REPORT})
        e.preventDefault()

        fetch(this.URL_REPORT)
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


    render(){
        return(
            
            <form>
                <input type="text" name="from_date" value={this.state.from_date} onChange={this.onChange} />
                <input type="text" name="to_date" value={this.state.to_date} onChange={this.onChange}/>
                <button onClick={this.getData} >submit</button>
                <br/>                
                {/* <GetOnlinePosts url={this.URL_REPORT} /> */}
                {/* <h1>{this.URL_REPORT}</h1> */}

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
                        this.state.posts.map(post => (
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



                
            </form>
        )
    }
}

export default GetDates;
