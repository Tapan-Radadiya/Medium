import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import { DynamicFormProps, IFormField } from '../assets/interfaces';

const DynamicForm: React.FC<DynamicFormProps> = ({ fields, onSubmit }) => {
    const [showPassword, setShowPassword] = useState<boolean>(false);

    const { register, handleSubmit, formState: { errors } } = useForm({ mode: 'all' });

    const renderField = (field: IFormField) => {
        const error = errors[field.id]?.message as string;

        const isPasswordField = field.type === 'password';
        const inputType = isPasswordField && showPassword ? 'text' : field.type;

        return (
            <div id='input-wrapper'>
                <div id='input-container'>
                    {
                        field.type === 'checkbox' && field.options ? (
                            <div className='grid grid-cols-2 gap-4'>
                                {field.options.map(option => (
                                    <div key={option.value} className='flex gap-1 items-center justify-center'>
                                        <label htmlFor={`${field.id}-${option.value}`} className='text-gray-700 font-bold'>{option.label} :</label>
                                        <input
                                            id={`${field.id}-${option.value}`}
                                            {...register(field.id, { ...field.validation })}
                                            type={field.type}
                                            value={option.value}
                                            className=''
                                        />
                                    </div>
                                ))}
                            </div>
                        ) : field.type === 'select' ? (
                            <select
                                {...register(field.id, { ...field.validation })}
                                id={field.id}
                                className={"border rounded w-full sm:py-2 sm:px-3 py-1 px-3 text-stone-600 leading-tight focus:outline-none text-sm sm:text-base"}
                            >
                                {field.options?.map((option) => (
                                    <option key={option.value} value={option.value}>
                                        {option.label}
                                    </option>
                                ))}
                            </select>
                        ) : (
                            <div className='flex items-center p-1 border'>
                                {field.icon && <div className='ml-2'>{field.icon}</div>}
                                <input
                                    id={field.id}
                                    {...register(field.id, { ...field.validation })}
                                    type={inputType}
                                    placeholder={field.placeholder}
                                    className={'rounded w-full sm:py-2 sm:px-3 py-1 px-2 text-stone-600 leading-tight focus:outline-none text-sm sm:text-base'}
                                />
                                {isPasswordField && (
                                    <div
                                        id="prop-icon"
                                        className="hover:cursor-pointer mr-3"
                                        onClick={() => setShowPassword(!showPassword)}
                                    >
                                        {showPassword ? <AiOutlineEye /> : <AiOutlineEyeInvisible />}
                                    </div>
                                )}
                            </div>
                        )
                    }
                </div>
                {error && <span id={field.errorId}>{error}</span>}
            </div>
        );
    };

    return (
        <main className='md:w-3/4 m-auto md:h-0'>
            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col md:w-1/2 m-auto p-5 gap-5 md:mt-5 md:border border-slate-400 rounded-lg">
                {fields.map((field) => (
                    <div key={field.id}>
                        <label
                            htmlFor={field.id}
                            className='block text-gray-700 sm:text-lg font-bold mb-2'
                        >
                            {field.label}
                        </label>
                        {renderField(field)}
                    </div>
                ))
                }
                <button
                    type='submit'
                    disabled={Object.keys(errors).length ? true : false}
                    className='px-4 py-2 bg-slate-400 hover:bg-slate-600 hover:transition hover:text-white rounded-lg disabled:bg-gray-600 disabled:hover:bg-gray-600 disabled:text-white'
                >
                    Submit
                </button>
            </form >
        </main>
    );
};

export default DynamicForm;