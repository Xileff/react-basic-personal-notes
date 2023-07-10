import React from "react";

class InputNote extends React.Component {
    constructor(props){
        super(props)

        this.state = {
            maxLength: 50,
            inputCharsLeft: 50,
            id: 0,
            title: '',
            body: '',
            archived: false,
            createdAt: ''
        }

        this.updateTitle = this.updateTitle.bind(this)
        this.updateBody = this.updateBody.bind(this)
        this.submitNote = this.submitNote.bind(this)
    }

    updateTitle(event){
        const input = Array.from(event.target.value).slice(0, 50).join("")
        this.setState(state => {
            return {
                title: input,
                inputCharsLeft: state.maxLength - input.length
            }
        })
    }

    updateBody(event){
        this.setState(() => {
            return {
                body: event.target.value
            }
        })
    }

    submitNote(event){
        event.preventDefault()
        this.props.addNewNote({
            id: +new Date(),
            title: this.state.title,
            body: this.state.body,
            archived: false,
            createdAt: new Date()
        })
        this.setState(() => {
            return {
                id: 0,
                title: '',
                body: '',
                inputCharsLeft: 50,
                archived: false,
                createdAt: ''
            }
        })
        
    }

    render(){
        return (
            <div className="note-input">
                <h2>Buat catatan</h2>
                <form className="form-group" onSubmit={this.submitNote}>
                    <p className="note-input__title__char-limit">Sisa karakter: {this.state.inputCharsLeft}</p>
                    <input type="text" className="note-input__title rounded-3 bg-light text-dark" placeholder="Ini adalah judul" required value={this.state.title} onChange={this.updateTitle}/>
                    <textarea className="note-input__body rounded-3 bg-light text-dark" type="text" placeholder="Tuliskan catatan anda di sini..." required onChange={this.updateBody} value={this.state.body}></textarea>
                    <button className="bg-success rounded-3" type="submit">Buat</button>
                </form>
            </div>
        )
    }
}

export default InputNote