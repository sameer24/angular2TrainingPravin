using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Sockets;
using System.Text;
using System.Threading.Tasks;

namespace TCPClient
{
    class Program
    {
        static string HOST = "127.0.0.1";
        static int PORT = 9090;
        static TcpClient client;
        static void Main(string[] args)
        {
            string inputData;
            do
            {
                Console.WriteLine("Enter Your Choices 1.Open 2.Send 3.Close 4.Quit");
                inputData = Console.ReadLine();
                switch (inputData)
                {
                    case "1":
                        OpenConnection();
                        break;

                    case "2":
                        Console.WriteLine("Enter Name,Address,City");                       
                         Customer custmer = new Customer();
                         custmer.Name = Console.ReadLine();
                         custmer.Address = Console.ReadLine();
                         custmer.City = Console.ReadLine();
                         SendData(custmer);
                        break;

                    case "3":
                        CloseConnection();
                        break;

                    default:
                        break;
                }

            } while (!inputData.Equals("4"));
            Console.ReadKey();
        }

        private static void SendData(Customer obj)
        {
            if (client == null)
            {
                Console.WriteLine("Connection not opened");
                return;
            }

            //Send Data
            NetworkStream netStrm = client.GetStream();
            string json = JsonConvert.SerializeObject(obj);
            byte[] sendData = ASCIIEncoding.ASCII.GetBytes(json);           
            netStrm.Write(sendData,0,sendData.Length);

            //Receive Data
            byte[] receivedData = new byte[client.ReceiveBufferSize];
            int bytesRead = netStrm.Read(receivedData, 0, client.ReceiveBufferSize);
            Console.WriteLine("received from server {0}", Encoding.ASCII.GetString(receivedData,0,bytesRead));
        }

        private static void CloseConnection()
        {
            if(client==null)
            {
                Console.WriteLine("Connection is closed");
            }
            try
            {
                client.Close();
                client = null;
            }
            catch (Exception ex)
            {
                  Console.WriteLine("Connection Error : {0}", ex.Message);
            }
        }

        private static void OpenConnection()
        {
            if (client != null)
            {
                Console.WriteLine("Connection allready started");
            }
            else
            {
                try
                {
                    client = new TcpClient();
                    client.Connect(HOST, PORT);
                    Console.WriteLine("Connection Succssful");
                }
                catch (Exception ex)
                {
                    client = null;
                    Console.WriteLine("Connection Error : {0}", ex.Message);
                    
                }
            }
        }
    }


    class Customer
    {
        public string Name { get; set; }
        public string Address { get; set; }
        public string City { get; set; }
    }
}
