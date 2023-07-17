import {StyleSheet, Text, View} from 'react-native';
import React, {Suspense} from 'react';

const LazyText = React.lazy(() => import('./LazyText'));

const App = () => {
  return (
    <Suspense
      fallback={
        <View style={s.container}>
          <Text>Loading...</Text>
        </View>
      }>
      <LazyText />
    </Suspense>
  );
};

export default App;

const s = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
