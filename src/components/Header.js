import React from "react";

class Header extends React.Component {
    constructor(props){
        super(props)

        this.state = {
            keyword: ''
        }

        this.changeStateKeyword = this.changeStateKeyword.bind(this)
    }

    changeStateKeyword(event){
        this.setState(() => {
            return {
                keyword: event.target.value
            }
        })
    }

    render(){
        return (
            <header>
                <section className="note-app__header">
                    <h1 className="poppins">Notes App</h1>
                    <section className="note-search">
                        <input type="text" placeholder="Cari catatan" className="w-100 rounded-5 bg-light text-dark montserrat fw-light" value={this.state.keyword} onChange={this.changeStateKeyword} onKeyUp={() => { this.props.fnGetNotes(this.state.keyword) }}/>
                    </section>
                </section>
            </header>
        )
    }
}

export default Header