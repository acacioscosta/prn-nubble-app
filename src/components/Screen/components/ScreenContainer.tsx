import {ReactNode} from 'react';
import {ScrollView, View} from 'react-native';

interface Props {
  children: ReactNode;
  backgroundColor: string;
}

export const ScrollViewContainer = ({children, backgroundColor}: Props) => {
  return (
    <ScrollView
      keyboardShouldPersistTaps="handled"
      style={{backgroundColor, flex: 1}}>
      {children}
    </ScrollView>
  );
};

export const ViewContainer = ({children, backgroundColor}: Props) => {
  return <View style={{backgroundColor}}>{children}</View>;
};
