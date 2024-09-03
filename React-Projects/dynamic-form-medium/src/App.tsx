import { AiOutlineLock, AiOutlineMail, AiOutlineNumber, AiOutlineUser } from 'react-icons/ai';
import DynamicForm from './components/DynamicForm';
import { IFormField } from './assets/interfaces';

const App: React.FC = () => {
    const formFields: IFormField[] = [
        {
            id: 'name',
            errorId: 'nameErr',
            label: 'Name',
            type: 'text',
            placeholder: 'Enter your name',
            required: true,
            validation: {
                required: 'Name is required',
                maxLength: {
                    value: 20,
                    message: 'Name must be less than 20 characters',
                },
            },
            icon: <AiOutlineUser />,
        },
        {
            id: 'email',
            errorId: 'emailErr',
            label: 'Email',
            type: 'email',
            placeholder: 'Enter your email',
            validation: {
                required: 'Email is required',
                pattern: {
                    value: /^\S+@\S+$/i,
                    message: 'Enter a valid email address',
                },
            },
            icon: <AiOutlineMail />,
        },
        {
            id: 'age',
            errorId: 'ageError',
            label: 'Age',
            type: 'number',
            placeholder: 'Enter your age',
            validation: {
                min: {
                    value: 18,
                    message: 'You must be at least 18 years old',
                },
            },
            icon: <AiOutlineNumber />,
        },
        {
            id: 'password',
            errorId: 'passwordErr',
            label: 'Password',
            type: 'password',
            placeholder: 'Enter your Password',
            validation: {
                required: 'Password is required',
            },
            icon: <AiOutlineLock />,
        },
        {
            id: 'hobbies',
            errorId: 'subscriptionErr',
            label: 'Hobbies',
            type: 'checkbox',
            options: [
                {value: 'reading', label: "Reading"},
                {value: 'sports', label: "Sports"},
                {value: 'music', label: "Music"},
                {value: 'travelling', label: "Travelling"},
            ],
            validation: {},
        },
        {
            id: 'gender',
            errorId: 'genderErr',
            label: 'Gender',
            type: 'select',
            options: [
                { value: 'male', label: 'Male' },
                { value: 'female', label: 'Female' },
                { value: 'other', label: 'Other' },
            ],
            validation: {
                required: 'Gender is required',
            },
        },
    ];

    const handleFormSubmit = (data: Record<string, any>) => {
        console.log('Form Data:', data);
    };

    return (
        <div className="">
            <h1>Dynamic Form Example</h1>
            <DynamicForm fields={formFields} onSubmit={handleFormSubmit} />
        </div>
    );
};

export default App;