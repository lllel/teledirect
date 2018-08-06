import * as React from 'react';
import './InputText.scss';
import {EventTypes} from '../../interfaces/enums/EventTypes';

interface IProps {
    required?: boolean;
    disabled?: boolean;
    value?: any;
    event?: (name?: string, type?: string, data?: any) => void;
    name?: string;
    className?: string;
    placeholder?: string;
}

interface IState {
    value: any;
}

export class InputText extends React.Component<IProps, IState> {
    inputTextRef: any;

    constructor(props) {
        super(props);

        this.state = {
            value: this.props.value || ''
        };
    }

    focus() {
        this.inputTextRef.focus();
    }

    getValue() {
        return this.state.value;
    }

    setValue(value) {
        value === '' ? this.setState({value: ''}) : this.setState({ value: value || this.state.value});
    }

    getStatus() {
        return {
            hasValue: !!this.getValue()
        }
    }

    onChange(evt) {
        if (this.props.event) {
            this.props.event(this.props.name, EventTypes.OnChange, evt.target.value)
        }

        this.setState({
            value: evt.target.value
        })
    }

    onKeyDown(evt) {
        if (this.props.event) {
            this.props.event(this.props.name, EventTypes.OnKeyDown, evt.keyCode)
        }
    }

    render() {
        const {className, placeholder, disabled} = this.props;

        return (
            <input type={'text'}
                   ref={(r) => this.inputTextRef = r}
                   className={className || ''}
                   value={this.state.value}
                   placeholder={placeholder || ''}
                   disabled={disabled}
                   onChange={this.onChange.bind(this)}
                   onKeyDown={this.onKeyDown.bind(this)}/>
        )
    }
}
