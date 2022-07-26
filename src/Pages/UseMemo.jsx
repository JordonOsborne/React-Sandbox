import UseMemoExample from "../Components/Examples/UseMemo"

function UseMemo() {
  return (
    <>
      <h1 className='text-center'>Enhance Performance using Memoization</h1>
      <p className='lead text-center'>
        Pass a “create” function and an array of dependencies.
        <code>useMemo</code> will only recompute the memoized value when one of
        the dependencies has changed. This optimization helps to avoid expensive
        calculations on every render.
      </p>
      <p className='lead text-center'>
        Remember that the function passed to
        <code>useMemo</code> runs during rendering. Don’t do anything there that
        you wouldn’t normally do while rendering. For example, side effects
        belong in <code>useEffect</code>, not <code>useMemo</code>.
      </p>
      <p className='lead text-center'>
        In the example below <code>useMemo</code> is used to prevent the
        recalculation when the 'Increment' button is clicked.
      </p>
      <UseMemoExample />
    </>
  )
}
export default UseMemo
