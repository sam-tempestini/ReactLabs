import React from "react";

class InputModal extends React.Component {
    constructor(props) {
        super(props);
        this.inputRef = React.createRef();
        this.modalRef = React.createRef();
        this.state = { 
            value: 0
        };
    }

    componentDidMount() {
        this.setState({
            value: this.props.initialValue
        });
        this.inputRef.current.focus();
        document.body.addEventListener('click', this.onClickOutside);
    } 
    componentWillUnmount(){
        document.body.removeEventListener('click', this.onClickOutside);        
    }
    onChange = e => {
        this.setState({
            value: e.target.value
        });
    };

    onSubmit = e => {
        e.preventDefault();
        const { onSubmit, onClose } = this.props;
        onSubmit(this.state.value);
        onClose();
    };

    onClickOutside = e => {
        const { onClose } = this.props;
        const element = e.target;
    
        if (this.modalRef.current && !this.modalRef.current.contains(element)) {
          e.preventDefault();
          e.stopPropagation();
          onClose();
        }
      };

    render() {
        return (
            <div className="modal-overlay">
                <div className="modal" ref={this.modalRef}>
                <h1>Insert a new quantity</h1>
                <form onSubmit={this.onSubmit}>
                    <input type="text"
                           value={this.state.value}
                           onChange={this.onChange}
                           ref={this.inputRef} />
                    <button>update</button>
                </form>
                </div>
            </div>
        );
    }
}

export default InputModal;
