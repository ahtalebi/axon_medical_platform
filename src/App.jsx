import React, { useState } from 'react';
import { specialties, doctors, popularSearches } from './data/fakeData';

function App() {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div className="min-h-screen bg-gray-50" dir="rtl">
      {/* Header */}
      <header className="bg-gradient-to-l from-blue-600 to-blue-800 text-white shadow-2xl">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 bg-white rounded-xl flex items-center justify-center shadow-lg">
                <span className="text-3xl">🏥</span>
              </div>
              <h1 className="text-3xl font-bold">اکسون</h1>
            </div>
            <nav className="hidden md:flex gap-8 text-sm font-medium">
              <a href="#" className="hover:text-gray-200 transition">صفحه اصلی</a>
              <a href="#" className="hover:text-gray-200 transition">تخصص‌ها</a>
              <a href="#" className="hover:text-gray-200 transition">پزشکان</a>
              <a href="#" className="hover:text-gray-200 transition">درباره ما</a>
            </nav>
            <div className="flex gap-3">
              <button className="px-6 py-2.5 bg-white text-blue-600 rounded-lg font-bold hover:bg-gray-100 transition shadow-md">
                ورود پزشکان
              </button>
              <button className="px-6 py-2.5 border-2 border-white rounded-lg hover:bg-white/10 transition font-medium">
                ورود / ثبت نام
              </button>
            </div>
          </div>

          {/* Hero Search Section */}
          <div className="max-w-5xl mx-auto py-12">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
              نوبت‌دهی آنلاین از بهترین پزشکان ایران
            </h2>
            <p className="text-center text-xl text-blue-100 mb-8">
              بیش از ۱۰,۰۰۰ پزشک آماده ارائه خدمات به شما
            </p>
            
            {/* Enhanced Search Bar */}
            <div className="bg-white rounded-2xl shadow-2xl p-3 flex items-center gap-3 hover:shadow-3xl transition">
              <span className="text-3xl px-3 text-gray-400">🔍</span>
              <input
                type="text"
                placeholder="جستجو: نام پزشک، تخصص، علائم بیماری..."
                className="flex-1 px-4 py-5 text-gray-800 outline-none text-lg"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <button className="px-12 py-5 bg-gradient-to-l from-blue-600 to-blue-700 text-white rounded-xl hover:from-blue-700 hover:to-blue-800 font-bold transition shadow-lg text-lg">
                جستجو
              </button>
            </div>
            
            {/* Popular Searches */}
            <div className="flex flex-wrap items-center justify-center gap-3 mt-6 text-sm">
              <span className="text-blue-100 font-medium">جستجوهای پرطرفدار:</span>
              {popularSearches.map((search, index) => (
                <button
                  key={index}
                  className="px-5 py-2 bg-white/20 rounded-full hover:bg-white/30 transition backdrop-blur"
                >
                  {search}
                </button>
              ))}
            </div>
          </div>
        </div>
      </header>

      {/* Specialties Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="flex items-center justify-between mb-10">
          <h2 className="text-4xl font-bold text-gray-800">
            تخصص‌های پزشکی
          </h2>
          <a href="#" className="text-blue-600 hover:text-blue-700 font-bold flex items-center gap-2 text-lg">
            مشاهده همه
            <span className="text-xl">←</span>
          </a>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {specialties.map(specialty => (
            <button
              key={specialty.id}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-2 text-center group border border-gray-100"
            >
              <div className="text-6xl mb-4 group-hover:scale-125 transition-transform duration-300">
                {specialty.icon}
              </div>
              <div className="font-bold text-gray-800 mb-2 text-lg">
                {specialty.name}
              </div>
              <div className="text-sm text-gray-500 font-medium">
                {specialty.count} پزشک
              </div>
            </button>
          ))}
        </div>
      </section>

      {/* Featured Doctors Section */}
      <section className="bg-gradient-to-b from-blue-50 via-white to-blue-50 py-16">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-10">
            <h2 className="text-4xl font-bold text-gray-800">
              پزشکان برتر
            </h2>
            <select className="px-6 py-3 border-2 border-gray-300 rounded-xl bg-white font-medium text-gray-700 hover:border-blue-500 transition">
              <option>بالاترین امتیاز</option>
              <option>نزدیک‌ترین نوبت</option>
              <option>کمترین قیمت</option>
              <option>بیشترین تجربه</option>
            </select>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {doctors.map(doctor => (
              <div
                key={doctor.id}
                className="bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all overflow-hidden border border-gray-100 group"
              >
                {/* Doctor Card Header */}
                <div className="bg-gradient-to-l from-blue-100 via-blue-50 to-white p-8">
                  <div className="flex items-start gap-5">
                    <img
                      src={doctor.image}
                      alt={doctor.name}
                      className="w-24 h-24 rounded-2xl border-4 border-white shadow-xl group-hover:scale-105 transition"
                    />
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-gray-800 mb-2">
                        {doctor.name}
                      </h3>
                      <p className="text-base text-gray-600 mb-3">
                        {doctor.specialty}
                      </p>
                      <div className="flex items-center gap-2">
                        <div className="flex text-yellow-400">
                          {[1,2,3,4,5].map(i => (
                            <span key={i} className={i <= doctor.rating ? 'text-yellow-400' : 'text-gray-300'}>⭐</span>
                          ))}
                        </div>
                        <span className="font-bold text-gray-800 text-lg">{doctor.rating}</span>
                        <span className="text-sm text-gray-500">
                          ({doctor.reviewCount} نظر)
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Doctor Info */}
                <div className="p-8 space-y-4">
                  <div className="flex items-center gap-4 text-gray-700">
                    <span className="text-2xl">💼</span>
                    <span className="text-base font-medium">{doctor.experience} سال تجربه</span>
                  </div>
                  
                  <div className="flex items-center gap-4 text-gray-700">
                    <span className="text-2xl">📍</span>
                    <span className="text-base">{doctor.location}</span>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <span className="text-2xl">⏰</span>
                    <span className="text-base text-green-600 font-bold">
                      {doctor.nextAvailable}
                    </span>
                  </div>
                  
                  <div className="flex items-center gap-4 text-gray-700">
                    <span className="text-2xl">💰</span>
                    <span className="text-base font-bold text-gray-800">
                      {doctor.consultationFee.toLocaleString('fa-IR')} تومان
                    </span>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="px-6 pb-6 flex gap-3">
                  <button className="flex-1 py-4 bg-gradient-to-l from-blue-600 to-blue-700 text-white rounded-2xl hover:from-blue-700 hover:to-blue-800 font-bold transition transform hover:scale-105 shadow-lg text-lg">
                    رزرو نوبت
                  </button>
                  <button className="flex-1 py-4 border-3 border-blue-600 text-blue-600 rounded-2xl hover:bg-blue-50 font-bold transition text-lg">
                    مشاوره آنلاین
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <button className="px-12 py-4 bg-gradient-to-l from-blue-600 to-blue-700 text-white rounded-2xl hover:from-blue-700 hover:to-blue-800 font-bold transition shadow-xl text-lg">
              مشاهده همه پزشکان
            </button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-gradient-to-l from-blue-700 via-blue-600 to-blue-700 text-white py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-5xl font-bold text-center mb-16">چرا اکسون؟</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
            <div className="text-center group">
              <div className="text-7xl mb-6 group-hover:scale-125 transition-transform">⚡</div>
              <h3 className="font-bold text-2xl mb-4">نوبت‌دهی سریع</h3>
              <p className="text-blue-100 text-lg">در کمتر از ۲ دقیقه نوبت خود را رزرو کنید</p>
            </div>
            
            <div className="text-center group">
              <div className="text-7xl mb-6 group-hover:scale-125 transition-transform">👨‍⚕️</div>
              <h3 className="font-bold text-2xl mb-4">بهترین پزشکان</h3>
              <p className="text-blue-100 text-lg">دسترسی به بیش از ۱۰,۰۰۰ پزشک متخصص</p>
            </div>
            
            <div className="text-center group">
              <div className="text-7xl mb-6 group-hover:scale-125 transition-transform">💬</div>
              <h3 className="font-bold text-2xl mb-4">مشاوره آنلاین</h3>
              <p className="text-blue-100 text-lg">مشاوره متنی و تلفنی ۲۴ ساعته</p>
            </div>
            
            <div className="text-center group">
              <div className="text-7xl mb-6 group-hover:scale-125 transition-transform">📋</div>
              <h3 className="font-bold text-2xl mb-4">پرونده الکترونیک</h3>
              <p className="text-blue-100 text-lg">مدیریت کامل سوابق پزشکی شما</p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="p-6">
              <div className="text-6xl font-bold text-blue-600 mb-3">۱۰,۰۰۰+</div>
              <div className="text-gray-600 font-medium text-lg">پزشک فعال</div>
            </div>
            <div className="p-6">
              <div className="text-6xl font-bold text-blue-600 mb-3">۵۰۰,۰۰۰+</div>
              <div className="text-gray-600 font-medium text-lg">نوبت رزرو شده</div>
            </div>
            <div className="p-6">
              <div className="text-6xl font-bold text-blue-600 mb-3">۱۰۰,۰۰۰+</div>
              <div className="text-gray-600 font-medium text-lg">کاربر فعال</div>
            </div>
            <div className="p-6">
              <div className="text-6xl font-bold text-blue-600 mb-3">۴.۸</div>
              <div className="text-gray-600 font-medium text-lg">رضایت کاربران</div>
            </div>
          </div>
        </div>
      </section>

      {/* Mobile App Section */}
      <section className="bg-gradient-to-b from-gray-50 to-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-gray-800 mb-6">دانلود اپلیکیشن اکسون</h2>
            <p className="text-xl text-gray-600 mb-10">
              با نصب اپلیکیشن اکسون، در هر زمان و مکان به پزشکان دسترسی داشته باشید
            </p>
            <div className="flex justify-center gap-6">
              <button className="px-10 py-5 bg-gray-900 text-white rounded-2xl flex items-center gap-4 hover:bg-gray-800 transition shadow-xl">
                <span className="text-4xl">📱</span>
                <div className="text-right">
                  <div className="text-xs text-gray-300">دانلود از</div>
                  <div className="font-bold text-xl">کافه بازار</div>
                </div>
              </button>
              <button className="px-10 py-5 bg-gray-900 text-white rounded-2xl flex items-center gap-4 hover:bg-gray-800 transition shadow-xl">
                <span className="text-4xl">📱</span>
                <div className="text-right">
                  <div className="text-xs text-gray-300">دانلود از</div>
                  <div className="font-bold text-xl">مایکت</div>
                </div>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <span className="text-4xl">🏥</span>
                <h3 className="text-3xl font-bold">اکسون</h3>
              </div>
              <p className="text-gray-400 text-base leading-relaxed">
                سامانه نوبت‌دهی آنلاین پزشکان و مشاوره پزشکی آنلاین
              </p>
            </div>
            
            <div>
              <h4 className="font-bold text-xl mb-6">دسترسی سریع</h4>
              <ul className="space-y-3 text-base text-gray-400">
                <li><a href="#" className="hover:text-white transition">درباره ما</a></li>
                <li><a href="#" className="hover:text-white transition">تماس با ما</a></li>
                <li><a href="#" className="hover:text-white transition">قوانین و مقررات</a></li>
                <li><a href="#" className="hover:text-white transition">حریم خصوصی</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold text-xl mb-6">خدمات</h4>
              <ul className="space-y-3 text-base text-gray-400">
                <li><a href="#" className="hover:text-white transition">نوبت‌دهی آنلاین</a></li>
                <li><a href="#" className="hover:text-white transition">مشاوره آنلاین</a></li>
                <li><a href="#" className="hover:text-white transition">نسخه الکترونیک</a></li>
                <li><a href="#" className="hover:text-white transition">پرونده پزشکی</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold text-xl mb-6">برای پزشکان</h4>
              <ul className="space-y-3 text-base text-gray-400">
                <li><a href="#" className="hover:text-white transition">ثبت نام پزشک</a></li>
                <li><a href="#" className="hover:text-white transition">مدیریت مطب</a></li>
                <li><a href="#" className="hover:text-white transition">پنل پزشک</a></li>
                <li><a href="#" className="hover:text-white transition">پشتیبانی</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 pt-10 flex flex-col md:flex-row items-center justify-between text-base text-gray-500">
            <p>© ۱۴۰۳ اکسون. تمامی حقوق محفوظ است.</p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <a href="#" className="hover:text-white transition">اینستاگرام</a>
              <a href="#" className="hover:text-white transition">تلگرام</a>
              <a href="#" className="hover:text-white transition">لینکدین</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
