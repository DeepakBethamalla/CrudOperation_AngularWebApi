using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using CRUD_WEBAPI.Models;

namespace CRUD_WEBAPI.Controllers
{
    public class CRUDAPIController : ApiController
    {
        EmployeeDatabaseEntities objEntity = new EmployeeDatabaseEntities();

        [HttpGet]
        [Route("Employee")]

        public IQueryable<Employee> GetEmployees()
        {
            try
            {
                return objEntity.Employees;
            }
            catch(Exception)
            {
                throw;
            }
        }

        [HttpGet]
        [Route("EmployeeById/{EmpId}")]
        public IHttpActionResult GetEmpById(string EmpId)
        {
            Employee objEmp = new Employee();
            int Id = Convert.ToInt32(EmpId);
            try
            {
                objEmp = objEntity.Employees.Find(Id);
                if(objEmp == null)
                {
                    return NotFound();
                }
            }
            catch (Exception)
            {
                throw;
            }
            return Ok(objEmp);
        }

        [HttpPost]
        [Route("InsertEmployee")]
        public IHttpActionResult PostEmployee(Employee data)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }
            try
            {
                objEntity.Employees.Add(data);
                objEntity.SaveChanges();
            }
            catch(Exception)
            {
                throw;  
            }
            return Ok(data);
        }

        [HttpPut]
        [Route("UpdateEmployee/{EmpId}")]
        public IHttpActionResult PutEmployee(Employee employee)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }
            try
            {
                Employee objEmp = new Employee();
                objEmp = objEntity.Employees.Find(employee.EmpId);
                if(objEmp != null)
                {
                    objEmp.EmpName = employee.EmpName;
                    objEmp.EmpAge = employee.EmpAge;
                    objEmp.EmpSalary = employee.EmpSalary;
                }
                int i = this.objEntity.SaveChanges();
            }
            catch (Exception)
            {
                throw;
            }
            return Ok(employee);
        }

        [HttpDelete]
        [Route("DeleteEmployee/{EmpId}")]
        public IHttpActionResult DeleteEmployee(int EmpId)
        {
            Employee objEmp = new Employee();
            int Id = Convert.ToInt32(EmpId);
            Employee employee = objEntity.Employees.Find(EmpId);
            if(employee == null)
            {
                return NotFound();
            }
            objEntity.Employees.Remove(employee);
            objEntity.SaveChanges();

            return Ok(employee);
        }
    }
}
