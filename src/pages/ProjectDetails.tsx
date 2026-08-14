import { ArrowLeft, GitFork } from "lucide-react";
import { Link, useParams } from "react-router-dom";

import { unfinishedProjects } from "../constants/projects";

export default function ProjectDetails() {
  const { slug } = useParams();

  const project = unfinishedProjects.find((project) => project.slug === slug);

  if (!project) {
    return (
      <main className="min-h-screen bg-gray-50 flex items-center justify-center px-6">
        <div className="text-center">
          <h1 className="text-3xl font-bold mb-4">Project Not Found</h1>

          <p className="text-gray-600 mb-6">
            The project you're looking for doesn't exist.
          </p>

          <Link
            to="/#unfinished-projects"
            className="
              inline-flex
              items-center
              gap-2
              px-5
              py-3
              rounded-xl
              bg-black
              text-white
              hover:bg-gray-800
              transition
            "
          >
            <ArrowLeft size={18} />
            Back to Projects
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-gray-50 py-20 px-6">
      <div className="max-w-5xl mx-auto">
        {/* Back Button */}
        <Link
          to="/#unfinished-projects"
          className="
            inline-flex
            items-center
            gap-2
            text-gray-600
            hover:text-black
            transition
            mb-10
          "
        >
          <ArrowLeft size={18} />
          Back to Projects
        </Link>

        {/* Header */}
        <div className="bg-white rounded-3xl border p-8 md:p-12">
          {/* Status */}
          <span
            className="
              inline-block
              mb-5
              px-3
              py-1
              text-xs
              font-semibold
              rounded-full
              bg-yellow-100
              text-yellow-700
            "
          >
            {project.status}
          </span>

          {/* Title */}
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            {project.title}
          </h1>

          {/* Description */}
          <p className="text-lg text-gray-600 leading-relaxed max-w-3xl">
            {project.desc}
          </p>

          {/* Divider */}
          <div className="border-t my-10" />

          {/* Technologies */}
          <div className="mb-10">
            <h2 className="text-xl font-bold mb-4">Technologies</h2>

            <div className="flex flex-wrap gap-3">
              {project.tech.map((technology) => (
                <span
                  key={technology}
                  className="
                    px-4
                    py-2
                    bg-gray-100
                    border
                    rounded-xl
                    text-sm
                    font-medium
                  "
                >
                  {technology}
                </span>
              ))}
            </div>
          </div>

          {/* Project Information */}
          <div className="mb-10">
            <h2 className="text-xl font-bold mb-4">About This Project</h2>

            <p className="text-gray-600 leading-relaxed">
              This project is currently under development. It is a full-stack
              e-commerce platform with shared authentication and role-based
              authorization, an administrative management system, and a
              customer-facing storefront.
            </p>
          </div>

          {/* Current Progress */}
          <div className="mb-10">
            <h2 className="text-xl font-bold mb-8">Current Progress</h2>

            {/* Authentication & Authorization */}
            {/* Authentication & Authorization */}
            <div className="mb-10">
              <h3 className="text-lg font-semibold mb-4">
                Authentication & Authorization
              </h3>

              <div className="space-y-3 pl-1">
                {/* Completed */}
                <div className="flex items-center gap-3">
                  <span className="text-green-600 font-semibold">✓</span>
                  <span>User authentication</span>
                </div>

                <div className="flex items-center gap-3">
                  <span className="text-green-600 font-semibold">✓</span>
                  <span>JWT authentication</span>
                </div>

                <div className="flex items-center gap-3">
                  <span className="text-green-600 font-semibold">✓</span>
                  <span>Role-based authorization</span>
                </div>

                <div className="flex items-center gap-3">
                  <span className="text-green-600 font-semibold">✓</span>
                  <span>Protected routes</span>
                </div>

                {/* In Progress */}
                <div className="flex items-center gap-3">
                  <span className="text-yellow-600 font-semibold">◐</span>
                  <span>Forgot password</span>
                </div>

                <div className="flex items-center gap-3">
                  <span className="text-yellow-600 font-semibold">◐</span>
                  <span>Change password</span>
                </div>

                <div className="flex items-center gap-3">
                  <span className="text-yellow-600 font-semibold">◐</span>
                  <span>Email verification</span>
                </div>
              </div>
            </div>

            {/* Admin Side */}
            <div className="mb-10">
              <h3 className="text-lg font-semibold mb-5">Admin Side</h3>

              {/* Dashboard */}
              <div className="mb-7">
                <h4 className="font-semibold mb-3">Dashboard</h4>

                <div className="space-y-3 pl-4">
                  <div className="flex items-center gap-3">
                    <span className="text-yellow-600 font-semibold">◐</span>
                    <span>Admin dashboard</span>
                  </div>
                </div>
              </div>

              {/* User Management */}
              <div className="mb-7">
                <h4 className="font-semibold mb-3">User Management</h4>

                <div className="space-y-3 pl-4">
                  <div className="flex items-center gap-3">
                    <span className="text-yellow-600">◐</span>
                    <span>Create users</span>
                  </div>

                  <div className="flex items-center gap-3">
                    <span className="text-green-600">✓</span>
                    <span>View users</span>
                  </div>

                  <div className="flex items-center gap-3">
                    <span className="text-green-600">✓</span>
                    <span>Update users</span>
                  </div>

                  <div className="flex items-center gap-3">
                    <span className="text-green-600">✓</span>
                    <span>Soft delete users</span>
                  </div>

                  <div className="flex items-center gap-3">
                    <span className="text-green-600">✓</span>
                    <span>Search users</span>
                  </div>

                  <div className="flex items-center gap-3">
                    <span className="text-green-600">✓</span>
                    <span>Filter users by role</span>
                  </div>

                  <div className="flex items-center gap-3">
                    <span className="text-green-600">✓</span>
                    <span>User pagination</span>
                  </div>
                </div>
              </div>

              {/* Product Management */}
              <div className="mb-7">
                <h4 className="font-semibold mb-3">Product Management</h4>

                <div className="space-y-3 pl-4">
                  <div className="flex items-center gap-3">
                    <span className="text-green-600">✓</span>
                    <span>Create products</span>
                  </div>

                  <div className="flex items-center gap-3">
                    <span className="text-green-600">✓</span>
                    <span>View products</span>
                  </div>

                  <div className="flex items-center gap-3">
                    <span className="text-green-600">✓</span>
                    <span>Update products</span>
                  </div>

                  <div className="flex items-center gap-3">
                    <span className="text-yellow-600">◐</span>
                    <span>Delete products</span>
                  </div>

                  <div className="flex items-center gap-3">
                    <span className="text-green-600">✓</span>
                    <span>Product image upload</span>
                  </div>
                </div>
              </div>

              {/* Category Management */}
              <div className="mb-7">
                <h4 className="font-semibold mb-3">Category Management</h4>

                <div className="space-y-3 pl-4">
                  <div className="flex items-center gap-3">
                    <span className="text-green-600">✓</span>
                    <span>Create categories</span>
                  </div>

                  <div className="flex items-center gap-3">
                    <span className="text-green-600">✓</span>
                    <span>View categories</span>
                  </div>

                  <div className="flex items-center gap-3">
                    <span className="text-green-600">✓</span>
                    <span>Update categories</span>
                  </div>

                  <div className="flex items-center gap-3">
                    <span className="text-yellow-600">◐</span>
                    <span>Delete categories</span>
                  </div>
                </div>
              </div>

              {/* Order Management */}
              <div>
                <h4 className="font-semibold mb-3">Order Management</h4>

                <div className="space-y-3 pl-4">
                  <div className="flex items-center gap-3">
                    <span className="text-yellow-600">◐</span>
                    <span>View orders</span>
                  </div>

                  <div className="flex items-center gap-3">
                    <span className="text-yellow-600">◐</span>
                    <span>Manage order status</span>
                  </div>
                </div>
              </div>
              {/* Settings */}
              <div className="mt-7">
                <h4 className="font-semibold mb-3">Settings</h4>

                <div className="space-y-3 pl-4">
                  <div className="flex items-center gap-3">
                    <span className="text-yellow-600">◐</span>
                    <span>Admin profile settings</span>
                  </div>

                  <div className="flex items-center gap-3">
                    <span className="text-yellow-600">◐</span>
                    <span>Account settings</span>
                  </div>

                  <div className="flex items-center gap-3">
                    <span className="text-yellow-600">◐</span>
                    <span>Security settings</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Client Side */}
            <div>
              <h3 className="text-lg font-semibold mb-5">Client Side</h3>

              <div className="space-y-3 pl-1">
                <div className="flex items-center gap-3">
                  <span className="text-yellow-600">◐</span>
                  <span>Customer storefront</span>
                </div>

                <div className="flex items-center gap-3">
                  <span className="text-yellow-600">◐</span>
                  <span>Product browsing</span>
                </div>

                <div className="flex items-center gap-3">
                  <span className="text-yellow-600">◐</span>
                  <span>Product details</span>
                </div>

                <div className="flex items-center gap-3">
                  <span className="text-yellow-600">◐</span>
                  <span>Shopping cart</span>
                </div>

                <div className="flex items-center gap-3">
                  <span className="text-yellow-600">◐</span>
                  <span>Checkout</span>
                </div>

                <div className="flex items-center gap-3">
                  <span className="text-yellow-600">◐</span>
                  <span>Customer orders</span>
                </div>
              </div>
            </div>
          </div>

          {/* GitHub Buttons */}
          <div className="flex flex-wrap gap-4">
            <a
              href="https://github.com/jamesllagas82-lang/shoe-store-ecommerce-backend-js"
              target="_blank"
              rel="noopener noreferrer"
              className="
                inline-flex
                items-center
                gap-2
                px-5
                py-3
                rounded-xl
                bg-black
                text-white
                hover:bg-gray-800
                transition
              "
            >
              <GitFork size={18} />
              View Backend GitHub
            </a>

            <a
              href="https://github.com/jamesllagas82-lang/shoe-store-ecommerce-frontend-js"
              target="_blank"
              rel="noopener noreferrer"
              className="
                inline-flex
                items-center
                gap-2
                px-5
                py-3
                rounded-xl
                bg-black
                text-white
                hover:bg-gray-800
                transition
              "
            >
              <GitFork size={18} />
              View Frontend GitHub
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
