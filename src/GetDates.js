import React, { Component } from 'react';
import './style.css';


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
            <div>
                <h3 id="title">INCEDO</h3>
                <br/><br/>
                <div id="title1">.</div>
                <br/><br/>

                <form class="container styling">
                    <div class="input-group date" data-provide="datepicker">
                        <input id="from_date" class="form-control" type="date" name="from_date" placeholder="YYYY-MM-DD"
                        value={this.state.from_date} onChange={this.onChange}
                        min="2000-01-01" max="2050-12-31"></input>
                        
                        <input id="to_date" class="form-control" type="date" name="to_date" placeholder="YYYY-MM-DD"
                        value={this.state.to_date} onChange={this.onChange}
                        min="2000-01-01" max="2050-12-31"></input>
                        <button onClick={this.getData} class="btn btn-primary btn-lg">Generate Report</button>
                    </div>
                    <br />
                </form>
                <br/>
                <div class="container">
                    <h4>Report</h4>
                    <table class="table table-bordered table-striped">
                        <tr>
                            <th scope="col">emp_id</th>
                            <th scope="col">cart_id</th>
                            <th scope="col">snack_id</th>
                            <th scope="col">qty</th>
                            <th scope="col">data_time</th>
                            <th scope="col">total</th>
                            <th scope="col">payment_status</th>
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
            </div>
        )
    }
}

export default GetDates;
