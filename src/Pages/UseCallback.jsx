import UseCallbackExample from "../Components/Examples/UseCallback"

function UseCallback() {
  return (
    <>
      <h1 className='text-center'>Enhance Performance using Memoization</h1>
      <p className='lead text-center'>
        Pass an inline callback and an array of dependencies.{" "}
        <code>useCallback</code> will return a memoized version of the callback
        that only changes if one of the dependencies has changed. This is useful
        when passing callbacks to optimized child components that rely on
        reference equality to prevent unnecessary renders (e.g.{" "}
        <code>shouldComponentUpdate</code>).
      </p>
      <p className='lead text-center'>
        Remember that the function passed to <code>useCallback</code> runs
        during rendering. Don’t do anything there that you wouldn’t normally do
        while rendering. For example, side effects belong in{" "}
        <code>useEffect</code>, not <code>useMemo</code>.
      </p>
      <p className='lead text-center'>
        In the example below <code>useCallback</code> is used to prevent the
        recalculation when the 'Increment' button is clicked.
      </p>
      <UseCallbackExample />
    </>
  )
}
export default UseCallback
