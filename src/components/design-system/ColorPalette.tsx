import React from "react";
import { colors } from "@/lib/design-tokens";

interface ColorSwatchProps {
  color: string;
  name: string;
}

const ColorSwatch: React.FC<ColorSwatchProps> = ({ color, name }) => {
  return (
    <div className="flex flex-col">
      <div
        className="w-10 h-10"
        style={{ backgroundColor: color }}
        title={name}
      />
      <span className="text-xs mt-1 text-gray-600 hidden group-hover:block">
        {name}
      </span>
    </div>
  );
};

const ColorPalette: React.FC = () => {
  return (
    <section aria-labelledby="color-palette-heading">
      <h2 id="color-palette-heading" className="text-lg font-semibold mb-4">
        Color Palette
      </h2>
      <div className="flex flex-col w-10 group">
        <ColorSwatch color={colors.white} name="White" />
        <ColorSwatch color={colors.charcoal} name="Charcoal" />
        <ColorSwatch color={colors.oliviaBlue} name="Olivia Blue" />
        <ColorSwatch
          color={colors.oliviaBlueDarker}
          name="Olivia Blue Darker"
        />
        <ColorSwatch color={colors.oliviaBlueT600} name="Olivia Blue T600" />
        <ColorSwatch color={colors.oliviaBlueT700} name="Olivia Blue T700" />
        <ColorSwatch color={colors.oliviaBlueT900} name="Olivia Blue T900" />
        <ColorSwatch color={colors.oliviaBlueT950} name="Olivia Blue T950" />
        <ColorSwatch color={colors.oliviaBlueT950} name="Olivia Blue T950-2" />
        <ColorSwatch color={colors.midnightTeal} name="Midnight Teal" />
        <ColorSwatch color={colors.earlGrey} name="Earl Grey" />
        <ColorSwatch color={colors.steelGrey} name="Steel Grey" />
        <ColorSwatch color={colors.glitterGrey} name="Glitter Grey" />
        <ColorSwatch color={colors.discoGrey} name="Disco Grey" />
        <ColorSwatch color={colors.fogGrey} name="Fog Grey" />
        <ColorSwatch color={colors.mistGrey} name="Mist Grey" />
        <ColorSwatch color={colors.dangerRed} name="Danger Red" />
        <ColorSwatch color={colors.dangerRedDark} name="Danger Red Dark" />
        <ColorSwatch color={colors.dangerRedT300} name="Danger Red T300" />
        <ColorSwatch color={colors.dangerRedT900} name="Danger Red T900" />
        <ColorSwatch color={colors.cautionYellow} name="Caution Yellow" />
        <ColorSwatch
          color={colors.cautionYellowDark}
          name="Caution Yellow Dark"
        />
        <ColorSwatch
          color={colors.cautionYellowT300}
          name="Caution Yellow T300"
        />
        <ColorSwatch
          color={colors.cautionYellowT900}
          name="Caution Yellow T900"
        />
        <ColorSwatch color={colors.goGreen} name="Go Green" />
        <ColorSwatch color={colors.goGreenDark} name="Go Green Dark" />
        <ColorSwatch color={colors.goGreenT600} name="Go Green T600" />
        <ColorSwatch color={colors.goGreenT900} name="Go Green T900" />
        <ColorSwatch color={colors.cardinalRed} name="Cardinal Red" />
        <ColorSwatch color={colors.navyBlue} name="Navy Blue" />
        <ColorSwatch color={colors.cactusGreen} name="Cactus Green" />
        <ColorSwatch color={colors.cactusGreenDark} name="Cactus Green Dark" />
        <ColorSwatch color={colors.cactusGreenT400} name="Cactus Green T400" />
        <ColorSwatch color={colors.cactusGreenT800} name="Cactus Green T800" />
        <ColorSwatch color={colors.skyBlue} name="Sky Blue" />
        <ColorSwatch color={colors.skyBlueDark} name="Sky Blue Dark" />
        <ColorSwatch color={colors.skyBlueT600} name="Sky Blue T600" />
        <ColorSwatch color={colors.skyBlueT800} name="Sky Blue T800" />
        <ColorSwatch color={colors.twilightPurple} name="Twilight Purple" />
        <ColorSwatch
          color={colors.twilightPurpleDark}
          name="Twilight Purple Dark"
        />
        <ColorSwatch
          color={colors.twilightPurpleT400}
          name="Twilight Purple T400"
        />
        <ColorSwatch
          color={colors.twilightPurpleT800}
          name="Twilight Purple T800"
        />
        <ColorSwatch
          color={colors.pricklyPearMagenta}
          name="Prickly Pear Magenta"
        />
        <ColorSwatch
          color={colors.pricklyPearMagentaDark}
          name="Prickly Pear Magenta Dark"
        />
        <ColorSwatch
          color={colors.pricklyPearMagentaT400}
          name="Prickly Pear Magenta T400"
        />
        <ColorSwatch
          color={colors.pricklyPearMagentaT800}
          name="Prickly Pear Magenta T800"
        />
        <ColorSwatch color={colors.desertRed} name="Desert Red" />
        <ColorSwatch color={colors.desertRedDark} name="Desert Red Dark" />
        <ColorSwatch color={colors.desertRedT400} name="Desert Red T400" />
        <ColorSwatch color={colors.desertRedT800} name="Desert Red T800" />
        <ColorSwatch color={colors.duneOrange} name="Dune Orange" />
        <ColorSwatch color={colors.duneOrangeDark} name="Dune Orange Dark" />
        <ColorSwatch color={colors.duneOrangeT400} name="Dune Orange T400" />
        <ColorSwatch color={colors.duneOrangeT800} name="Dune Orange T800" />
      </div>
    </section>
  );
};

export default ColorPalette;
