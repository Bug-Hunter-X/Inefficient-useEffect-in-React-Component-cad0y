```javascript
function MyComponent() {
  const [count, setCount] = useState(0);
  const [shouldLog, setShouldLog] = useState(true);

  useEffect(() => {
    if (shouldLog) {
      console.log('Count updated:', count);
      setShouldLog(false);
    }
    return () => setShouldLog(true);
  }, [count]);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}
```