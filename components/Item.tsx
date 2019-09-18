import React from 'react';
import { Image, View, Text, StyleSheet } from 'react-native';
import type from '../constants/type';
import colors from '../constants/colors';
import { width } from '../constants/layout';

interface ItemProps {
  image?: number;
  featureImage?: boolean;
  title: string;
  description: string;
}

function Item(props: ItemProps) {
  const { image, featureImage, title, description } = props;
  return (
    <View style={styles.container}>
      {image ? (
        <Image
          source={image}
          style={[styles.image, featureImage && styles.featureImage]}
        />
      ) : null}
      <View style={styles.titleContainer}>
        <Text style={[type.subheader, styles.text]}>{title}</Text>
      </View>
      <Text style={[type.body, styles.text]}>{description}</Text>
    </View>
  );
}

export default Item;

const styles = StyleSheet.create({
  container: {
    padding: 40,
    backgroundColor: colors.dark.grey1,
    margin: 8,
    borderRadius: 8,
    flex: 1,
    borderWidth: 1,
  },
  image: {
    flex: 1,
    borderRadius: 4,
    resizeMode: 'cover',
    marginBottom: 24,
    minHeight: 120,
  },
  featureImage: {
    minHeight: 400,
  },
  titleContainer: {
    borderBottomWidth: 2,
    borderBottomColor: colors.dark.primary,
    paddingBottom: 6,
    marginBottom: 12,
  },
  text: {
    color: colors.dark.foreground,
  },
});
