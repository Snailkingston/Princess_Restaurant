import { useLanguage } from "../contexts/LanguageContext";

interface Props {
  dishName: string;
}

export default function OrderButton({ dishName }: Props) {
  const { language, t} = useLanguage();
 

  const message =
    language === "en"
      ? `Hello Cake Princess,\n\nI want to order: ${dishName}\nQuantity: \nLocation:`
      : `Bonjour Cake Princess,\n\nJe veux commander : ${dishName}\nQuantité : \nLocalisation :`;

  const whatsappLink = `https://wa.me/670899104?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
     className="orderbutton"
    >
      {t('menu.orderbutton')}
    </a>
  );
}
