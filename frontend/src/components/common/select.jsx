function CustomSelect(dropdownOptions,handleChange,customStyles,width,placeholder,placeholderColor,height,optionsColor,ismultipleSelect,chipbackground,dropdownColor){
    return(
        
            <div className='flex items-center justify-center h-[100vh]'>
                <Select options={dropdownOptions}
                        onChange={handleChange}
                        styles={customStyles}
                        width={width}
                        placeholder={placeholder}
                        placeholderColor={placeholderColor}
                        height={height}
                        optionsColor={optionsColor}
                        isMulti={ismultipleSelect}
                        chipbackground={chipbackground}
                        dropdownColor={dropdownColor}
                />
            </div>
          
        
    )
}

export default CustomSelect;