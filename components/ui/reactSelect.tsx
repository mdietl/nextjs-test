import { cx } from 'class-variance-authority'
import { stat } from 'fs'
import React from 'react'
import ReactSelect, { ClassNamesConfig, GroupBase } from 'react-select'
import ReactAsyncSelect from 'react-select/async'

const options = [
	{ value: 'chocolate', label: 'Chocolate' },
	{ value: 'strawberry', label: 'Strawberry' },
	{ value: 'vanilla', label: 'Vanilla' }
]

const styles: ClassNamesConfig<unknown, boolean, GroupBase<unknown>> = {
	container: state => cx(
		'border border-input rounded-md ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground min-h-[2.5rem]',
		state.isFocused && 'ring-2 ring-ring ring-offset-2',

	),
	control: state => cx(
		'flex items-center flex-wrap justify-between'
	),
	valueContainer: state => cx('flex items-center px-4 gap-1.5'),
	multiValue: state => cx('bg-accent text-sm rounded-md pl-2.5  flex items-center justify-between gap-1'),
	input: state => cx('flex  placeholder:text-muted-foreground'),
	menu: state => cx('rounded-md border bg-card text-card-foreground shadow-lg overflow-hidden mt-2'),
	menuList: state => cx('max-h-72 overflow-y-auto relative py-1 flex-1'),
	option: state => cx(
		'py-1.5 px-4',
		state.isFocused && 'bg-primary/40 text-accent-foreground',
		state.isSelected && 'bg-primary text-primary-foreground',
	),
	indicatorsContainer: state => cx('flex flex-shrink-0 gap-1.5 items-stretch'),
	dropdownIndicator: state => cx(
		'text-muted-foreground p-2 cursor-pointer',
		state.isFocused && 'text-accent-foreground'
	),
	clearIndicator: state => cx(
		'text-muted-foreground p-2 cursor-pointer',
		state.isFocused && 'text-accent-foreground'
	),
	indicatorSeparator: state => cx('bg-muted-foreground w-1 my-3'),

	multiValueRemove: state => cx(
		'flex px-1 cursor-pointer text-muted-foreground hover:text-foreground',

	),
	multiValueLabel: state => cx('py-1.5'),

}

const Select = React.forwardRef<
	React.ElementRef<typeof ReactSelect>,
	React.ComponentProps<typeof ReactSelect>
>(({ className, ...props }, ref) => (
	<ReactSelect
		ref={ref}
		{...props}
		unstyled
		classNames={styles}
	/>
))

Select.displayName = "Select"

const AsyncSelect = React.forwardRef<
	React.ElementRef<typeof ReactAsyncSelect>,
	React.ComponentProps<typeof ReactAsyncSelect>
>(({ className, ...props }, ref) => (
	<ReactSelect
		ref={ref}
		{...props}
		unstyled
		classNames={styles}
	/>
))

AsyncSelect.displayName = "AsyncSelect"

export { Select, AsyncSelect }