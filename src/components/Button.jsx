export function Button({ value, setRateNote}) {
    function handleChangeRateNote(value) {
        setRateNote(value)
      }

    return (
        <button className="bg-dark-blue w-10.5 h-10.5 rounded-full text-sm text-medium-grey focus:bg-medium-grey focus:text-whit font-bold hover:bg-orange hover:text-white cursor-pointer duration-400 sm:w-13 sm:h-13" onClick={ () => handleChangeRateNote(value)}>{value}</button>
    )
}