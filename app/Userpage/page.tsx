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

  const [selectedImage, setSelectedImage] = useState<File | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setSelectedImage(file);
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
    setSelectedImage(null);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 px-4 py-6">
      <div className="w-full max-w-lg p-6 bg-white rounded-lg shadow-lg">
        {!isLoggedIn ? (
          <div>
            <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">User Profile</h1>
            <form>
              <div className="mb-6 text-center">
                <label htmlFor="profilePicture" className="block font-medium text-gray-600 mb-2">
                  Profile Picture
                </label>
                <div className="relative w-24 h-24 mx-auto mb-4 rounded-full border border-gray-300 overflow-hidden">
                  {form.profilePicture ? (
                    <Image
                      src={form.profilePicture}
                      alt="Profile Picture"
                      layout="fill"
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

              {/* Name Field */}
              <div className="mb-4">
                <label htmlFor="name" className="block font-medium text-gray-600 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={form.name}
                  onChange={handleInputChange}
                  placeholder="Enter your name"
                  className="w-full border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                />
              </div>

              {/* Email Field */}
              <div className="mb-4">
                <label htmlFor="email" className="block font-medium text-gray-600 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={form.email}
                  onChange={handleInputChange}
                  placeholder="Enter your email"
                  className="w-full border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                />
              </div>

              {/* Password Field */}
              <div className="mb-4">
                <label htmlFor="password" className="block font-medium text-gray-600 mb-2">
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={form.password}
                  onChange={handleInputChange}
                  placeholder="Enter your password"
                  className="w-full border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                />
              </div>

              {/* Phone Number Field */}
              <div className="mb-4">
                <label htmlFor="phone" className="block font-medium text-gray-600 mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={form.phone}
                  onChange={handleInputChange}
                  placeholder="Enter your phone number"
                  className="w-full border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                />
              </div>

              {/* Address Field */}
              <div className="mb-4">
                <label htmlFor="address" className="block font-medium text-gray-600 mb-2">
                  Address
                </label>
                <input
                  type="text"
                  id="address"
                  name="address"
                  value={form.address}
                  onChange={handleInputChange}
                  placeholder="Enter your address"
                  className="w-full border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                />
              </div>

              {/* Date of Birth Field */}
              <div className="mb-4">
                <label htmlFor="dob" className="block font-medium text-gray-600 mb-2">
                  Date of Birth
                </label>
                <input
                  type="date"
                  id="dob"
                  name="dob"
                  value={form.dob}
                  onChange={handleInputChange}
                  className="w-full border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                />
              </div>

              {/* Gender Field */}
              <div className="mb-4">
                <label htmlFor="gender" className="block font-medium text-gray-600 mb-2">
                  Gender
                </label>
                <select
                  id="gender"
                  name="gender"
                  value={form.gender}
                  onChange={handleInputChange}
                  className="w-full border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                >
                  <option value="">Select Gender</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              {/* Bio Field */}
              <div className="mb-4">
                <label htmlFor="bio" className="block font-medium text-gray-600 mb-2">
                  Bio
                </label>
                <textarea
                  id="bio"
                  name="bio"
                  value={form.bio}
                  onChange={handleInputChange}
                  placeholder="Tell us about yourself"
                  className="w-full border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                />
              </div>

              <button
                type="button"
                onClick={handleSave}
                className="bg-blue-600 text-white w-full py-3 rounded-lg hover:bg-blue-700 transition"
              >
                Save & Login
              </button>
            </form>
          </div>
        ) : (
          <div>
            <h1 className="text-3xl font-bold mb-4 text-center text-gray-800">Welcome, {user?.name}</h1>
            <div className="flex flex-col items-center mb-6">
              {user?.profilePicture ? (
                <div className="w-24 h-24 rounded-full overflow-hidden mb-4">
                  <Image
                    src={user.profilePicture}
                    alt="Profile Picture"
                    width={96}
                    height={96}
                    className="object-cover"
                  />
                </div>
              ) : (
                <div className="w-24 h-24 bg-gray-300 rounded-full flex items-center justify-center mb-4">
                  <span className="text-gray-600">No Image</span>
                </div>
              )}
              <p className="text-lg font-medium text-gray-700">{user?.email}</p>
              <p className="text-sm text-gray-600">{user?.phone}</p>
              <p className="text-sm text-gray-600">{user?.address}</p>
            </div>
            <button
              onClick={handleLogout}
              className="bg-red-600 text-white w-full py-3 rounded-lg hover:bg-red-700 transition"
            >
              Logout
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
