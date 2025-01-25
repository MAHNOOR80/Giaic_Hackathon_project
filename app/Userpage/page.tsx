'use client';
import { useState } from 'react';
import Image from 'next/image';

interface User {
  name: string;
  email: string;
  password: string;
  phone: string;
  address: string;
  dob: string;
  gender: string;
  bio: string;
  profilePicture: string | null;
}

export default function UserProfilePage() {
  const [user, setUser] = useState<User | null>(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [form, setForm] = useState<User>({
    name: '',
    email: '',
    password: '',
    phone: '',
    address: '',
    dob: '',
    gender: '',
    bio: '',
    profilePicture: null,
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setForm({ ...form, profilePicture: URL.createObjectURL(file) });
    }
  };

  const handleSave = () => {
    if (form.name && form.email && form.password && form.phone && form.address) {
      setUser(form);
      setIsLoggedIn(true);
    } else {
      alert('Please fill all the required fields.');
    }
  };

  const handleLogout = () => {
    setUser(null);
    setIsLoggedIn(false);
    setForm({
      name: '',
      email: '',
      password: '',
      phone: '',
      address: '',
      dob: '',
      gender: '',
      bio: '',
      profilePicture: null,
    });
  };

  return (
    <div className="min-h-screen bg-gray-100 pt-20 md:pt-24 pb-10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-lg mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
          {!isLoggedIn ? (
            <div className="p-6 md:p-8">
              <h1 className="text-2xl md:text-3xl font-bold mb-6 text-center text-gray-800">User Profile</h1>
              <form className="space-y-6">
                <div className="text-center">
                  <label htmlFor="profilePicture" className="block font-medium text-gray-600 mb-2">
                    Profile Picture
                  </label>
                  <div className="relative w-24 h-24 mx-auto mb-4 rounded-full border border-gray-300 overflow-hidden">
                    {form.profilePicture ? (
                      <Image
                        src={form.profilePicture}
                        alt="Profile Picture"
                        fill
                        className="object-cover"
                      />
                    ) : (
                      <div className="w-full h-full bg-gray-200 flex items-center justify-center text-gray-500">
                        No Image
                      </div>
                    )}
                  </div>
                  <input
                    type="file"
                    id="profilePicture"
                    accept="image/*"
                    onChange={handleImageChange}
                    className="text-sm text-gray-600"
                  />
                </div>

                {/* Form Fields */}
                <div className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name *</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={form.name}
                      onChange={handleInputChange}
                      className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={form.email}
                      onChange={handleInputChange}
                      className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password *</label>
                    <input
                      type="password"
                      id="password"
                      name="password"
                      value={form.password}
                      onChange={handleInputChange}
                      className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone *</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={form.phone}
                      onChange={handleInputChange}
                      className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="address" className="block text-sm font-medium text-gray-700">Address *</label>
                    <input
                      type="text"
                      id="address"
                      name="address"
                      value={form.address}
                      onChange={handleInputChange}
                      className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="dob" className="block text-sm font-medium text-gray-700">Date of Birth</label>
                    <input
                      type="date"
                      id="dob"
                      name="dob"
                      value={form.dob}
                      onChange={handleInputChange}
                      className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>

                  <div>
                    <label htmlFor="gender" className="block text-sm font-medium text-gray-700">Gender</label>
                    <select
                      id="gender"
                      name="gender"
                      value={form.gender}
                      onChange={handleInputChange}
                      className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    >
                      <option value="">Select Gender</option>
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="bio" className="block text-sm font-medium text-gray-700">Bio</label>
                    <textarea
                      id="bio"
                      name="bio"
                      value={form.bio}
                      onChange={handleInputChange}
                      rows={4}
                      className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>
                </div>

                <div className="pt-4">
                  <button
                    type="button"
                    onClick={handleSave}
                    className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg hover:bg-blue-700 transition duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                  >
                    Save & Login
                  </button>
                </div>
              </form>
            </div>
          ) : (
            <div className="p-6 md:p-8">
              <div className="text-center">
                <h1 className="text-2xl md:text-3xl font-bold mb-6 text-gray-800">Welcome, {user?.name}</h1>
                {user?.profilePicture && (
                  <div className="relative w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden">
                    <Image
                      src={user.profilePicture}
                      alt="Profile Picture"
                      fill
                      className="object-cover"
                    />
                  </div>
                )}
              </div>

              <div className="space-y-4 bg-gray-50 p-6 rounded-lg">
                <p className="text-gray-700"><span className="font-semibold">Email:</span> {user?.email}</p>
                <p className="text-gray-700"><span className="font-semibold">Phone:</span> {user?.phone}</p>
                <p className="text-gray-700"><span className="font-semibold">Address:</span> {user?.address}</p>
                <p className="text-gray-700"><span className="font-semibold">Date of Birth:</span> {user?.dob}</p>
                <p className="text-gray-700"><span className="font-semibold">Gender:</span> {user?.gender}</p>
                <p className="text-gray-700"><span className="font-semibold">Bio:</span> {user?.bio}</p>
              </div>

              <div className="mt-8 text-center">
                <button
                  onClick={handleLogout}
                  className="bg-red-600 text-white py-2 px-6 rounded-lg hover:bg-red-700 transition duration-200 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
                >
                  Logout
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}