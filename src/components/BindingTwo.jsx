import ActionButton from "./react-binding-2/ActionButton";
import CharacterCounter from "./react-binding-2/CharacterCounter";
import DynamicStyle from "./react-binding-2/DynamicStyle";
import DynamicText from "./react-binding-2/DynamicText";
import DynamicTitle from "./react-binding-2/DynamicTitle";
import FilterArray from "./react-binding-2/FilterArray";
import MoneyChange from "./react-binding-2/MoneyChange";
import NameSurname from "./react-binding-2/NameSurname";
import TextAreaCount from "./react-binding-2/TextAreaCount";
import TextAreaQuantity from "./react-binding-2/TextAreaQuantity";

export default function BindingTwo() {
  return (
    <>
      <CharacterCounter />
      <FilterArray />
      <DynamicTitle />
      <NameSurname />
      <ActionButton />
      <DynamicStyle />
      <DynamicText />
      <MoneyChange />
      <TextAreaCount />
      <TextAreaQuantity />
    </>
  );
}
