import { Anchor, Mail, Phone, MapPin } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export default function Footer() {
  const { t } = useLanguage();
  return (
    <footer className="bg-slate-900 text-white py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Anchor className="w-8 h-8 text-amber-400" />
              <h3 className="text-2xl font-bold">SardiniaRent</h3>
            </div>
            <p className="text-slate-400 leading-relaxed">
              {t('footer.description')}
            </p>
          </div>

          <div>
            <h4 className="text-xl font-bold mb-4">{t('footer.contacts.title')}</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-slate-400">
                <Phone className="w-5 h-5 text-amber-400" />
                <span>+39 3343096682</span>
              </div>
              <div className="flex items-center gap-3 text-slate-400">
                <Mail className="w-5 h-5 text-amber-400" />
                <span>sardiniarent@gmail.com</span>
              </div>
              <div className="flex items-center gap-3 text-slate-400">
                <MapPin className="w-5 h-5 text-amber-400" />
                <span>Porto Pozzo, Sardegna</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-xl font-bold mb-4">{t('footer.hours.title')}</h4>
            <p className="text-slate-400 leading-relaxed">
              {t('footer.hours.description')}
            </p>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 text-center text-slate-400">
          <p>&copy; {new Date().getFullYear()} SardiniaRent. {t('footer.rights')}</p>
        </div>
      </div>
    </footer>
  );
}
