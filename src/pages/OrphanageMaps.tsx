import React, { useState } from "react";

import {
  StyleSheet,
  Text,
  View,
  Dimensions,
} from "react-native";
import { Feather } from "@expo/vector-icons";
import MapView, { Marker, PROVIDER_GOOGLE, Callout } from "react-native-maps";

import mapMarker from "../images/map-marker.png";
import { useNavigation, useFocusEffect } from "@react-navigation/native";
import { RectButton } from "react-native-gesture-handler";
import api from "../services/api";

interface Orphanege {
  id: number;
  latitude: number;
  longitude: number;
  name: string;
}

export default function OrphangeMaps() {
  const [orphanges, setOrphanges] = useState<Orphanege[]>([]);
  const { navigate } = useNavigation();

  useFocusEffect(() => {
    api.get("orphanages").then((response) => {
      setOrphanges(response.data);
    });
  });

  function hadleNavigateToDetails(id: number) {
    navigate("OrphanageDetails", { id });
  }

  function handleNavigateToOrphange() {
    navigate("SelectMapPosition");
  }

  return (
    <View style={styles.container}>
      <MapView
        provider={PROVIDER_GOOGLE}
        style={styles.map}
        initialRegion={{
          latitude: -20.2580286,
          longitude: -42.0295339,
          latitudeDelta: 0.008,
          longitudeDelta: 0.008,
        }}
      >
        {orphanges.map((orphange) => {
          return (
            <Marker
              key={orphange.id}
              icon={mapMarker}
              calloutAnchor={{
                x: 2.7,
                y: 0.8,
              }}
              coordinate={{
                latitude: orphange.latitude,
                longitude: orphange.longitude,
              }}
            >
              <Callout
                tooltip
                onPress={() => hadleNavigateToDetails(orphange.id)}
              >
                <View style={styles.calloutContainer}>
                  <Text style={styles.calloutText}>{orphange.name}</Text>
                </View>
              </Callout>
            </Marker>
          );
        })}
      </MapView>

      <View style={styles.footer}>
        <Text style={styles.footerText}>{orphanges.length} locais encontrados</Text>
        <RectButton
          style={styles.createOrphanageButton}
          onPress={handleNavigateToOrphange}
        >
          <Feather name="plus" size={20} color="#fff" />
        </RectButton>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  map: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
  },

  calloutContainer: {
    width: 160,
    height: 46,
    paddingHorizontal: 16,
    backgroundColor: "rgba(255, 255,255,0.8)",
    borderRadius: 16,
    justifyContent: "center",
    fontFamily: "Nunito_700Bold",
  },

  calloutText: {
    color: "#0086a5",
    fontSize: 14,
  },

  footer: {
    position: "absolute",
    left: 24,
    right: 24,
    bottom: 32,

    backgroundColor: "#fff",
    borderRadius: 20,
    height: 46,
    paddingLeft: 24,

    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",

    elevation: 3,
  },

  footerText: {
    color: "#8fa7b3",
    fontFamily: "Nunito_700Bold",
  },

  createOrphanageButton: {
    width: 56,
    height: 56,
    backgroundColor: "#15c3d6",
    borderRadius: 20,

    justifyContent: "center",
    alignItems: "center",
  },
});
