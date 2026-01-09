import { MapPin, Phone, Clock } from "lucide-react";
import { Card } from "./ui/card";
import { useLanguage } from "../contexts/LanguageContext";

export function Location() {
  const { language, t } = useLanguage();

  const whatsappMessage =
    language === "en"
      ? "Hello Cake Princess,\n\nI would like to order:\nDish(s): ___\nQuantity: ___\nLocation: ___\n\nThank you."
      : "Bonjour Cake Princess,\n\nJe voudrais commander :\nPlat(s) : ___\nQuantité : ___\nLocalisation : ___\n\nMerci.";

  return (
    <section
      id="location"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900"
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="mb-4 dark:text-white">{t("location.title")}</h2>
          <p className="text-gray-600 dark:text-gray-300">
            {t("location.subtitle")}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Contact Information */}
          <div className="space-y-6">
            <Card className="p-6 dark:bg-gray-800 dark:border-gray-700">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-pink-100 dark:bg-pink-900 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-pink-600 dark:text-pink-400" />
                </div>
                <div>
                  <h3 className="mb-2 dark:text-white">
                    {t("location.addressTitle")}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    {t("location.address")}
                    <br />
                    {t("location.city")}
                    <br />
                    {t("location.country")}
                  </p>
                  <a
                    href="https://maps.app.goo.gl/Qcmgaao7eUrmdB4U8"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 mt-3 text-pink-600 dark:text-pink-400 hover:text-pink-700 dark:hover:text-pink-300 transition-colors"
                  >
                    {t("location.getDirections")} →
                  </a>
                </div>
              </div>
            </Card>

            <Card className="p-6 dark:bg-gray-800 dark:border-gray-700">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-pink-100 dark:bg-pink-900 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-pink-600 dark:text-pink-400" />
                </div>
                <div>
                  <h3 className="mb-2 dark:text-white">
                    {t("location.contactTitle")}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    <a
                      href="tel:+237670899104"
                      className="hover:text-pink-600 dark:hover:text-pink-400 transition-colors"
                    >
                      +237 670 899 104
                    </a>
                  </p>
                  <a
                    href={`https://wa.me/670899104?text=${encodeURIComponent(
                      whatsappMessage
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 mt-3 text-green-600 hover:text-green-700 transition-colors"
                  >
                    <span>🟢</span> {t("location.whatsappUs")}
                  </a>
                </div>
              </div>
            </Card>

            <Card className="p-6 dark:bg-gray-800 dark:border-gray-700">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-pink-100 dark:bg-pink-900 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Clock className="w-6 h-6 text-pink-600 dark:text-pink-400" />
                </div>
                <div>
                  <h3 className="mb-2 dark:text-white">
                    {t("location.hoursTitle")}
                  </h3>
                  <div className="space-y-1 text-gray-600 dark:text-gray-300">
                    <div className="flex justify-between gap-8">
                      <span>{t("location.hoursText")}</span>
                      <span>{t("location.hoursTime")}</span>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </div>

          
        </div>
      </div>
    </section>
  );
}
