import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "./testReducer";

export default function Sandbox() {
  const dispatch = useDispatch();
  // const {data} = useSelector((state) => state.test);
  const data = useSelector((state) => state.test.data);
  return (
    <>
      <h3 className="font-semibold text-lg">The data is: {data}</h3>
      <div className="my-6 flex space-x-6">
        <button
          className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
          onClick={() => dispatch(increment(10))}
        >
          Increment
        </button>

        <button
          className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
          onClick={() => dispatch(decrement(5))}
        >
          Decrement
        </button>
      </div>
    </>
  );
}
